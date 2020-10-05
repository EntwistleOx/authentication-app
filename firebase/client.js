import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';

const firebaseConfig = JSON.parse(process.env.NEXT_PUBLIC_FIREBASE_CONFIG);

!firebase.apps.length && firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();
const storage = firebase.storage();

const defaultAvatar = process.env.NEXT_PUBLIC_DEFAULT_AVATAR;

export const onAuthStateChanged = (onChange) => {
  return auth.onIdTokenChanged(async (user) => {
    if (!user) {
      onChange(null);
      return;
    }

    const userDoc = await getUser(user);

    onChange(userDoc.data());
  });
};

const getUser = async (user) => {
  try {
    let doc;
    doc = await db.collection('users').doc(user.uid).get();

    if (!doc.exists) {
      await createUserCollection(user);
      doc = await db.collection('users').doc(user.uid).get();
    }

    // if (user.providerData[0].providerId !== doc.data().provider) {
    //   try {
    //     await db
    //       .collection('users')
    //       .doc(user.uid)
    //       .update({ provider: user.providerData[0].providerId });
    //   } catch (error) {
    //     console.log(error);
    //   }
    // }

    return doc;
  } catch (error) {
    // console.log(error);
    return error;
  }
};

const handleLogin = async (provider) => {
  try {
    const result = await firebase.auth().signInWithPopup(provider);
    return result;
  } catch (error) {
    return error;
  }
};

export const loginWithGoogle = async () => {
  try {
    const provider = new firebase.auth.GoogleAuthProvider();
    const login = await handleLogin(provider);
    if (login.message) {
      return login.message;
    }
    return { ok: true };
  } catch (error) {
    // console.log(error);
    return error;
  }
};

export const loginWithFacebook = async () => {
  try {
    const provider = new firebase.auth.FacebookAuthProvider();
    const login = await handleLogin(provider);
    if (login.message) {
      return login.message;
    }
    return { ok: true };
  } catch (error) {
    // console.log(error);
    return error;
  }
};

export const loginWithTwitter = async () => {
  try {
    const provider = new firebase.auth.TwitterAuthProvider();
    const login = await handleLogin(provider);
    if (login.message) {
      return login.message;
    }
    return { ok: true };
  } catch (error) {
    // console.log(error);
    return error;
  }
};

export const loginWithGithub = async () => {
  try {
    const provider = new firebase.auth.GithubAuthProvider();
    const login = await handleLogin(provider);
    if (login.message) {
      return login.message;
    }
    return { ok: true };
  } catch (error) {
    // console.log(error);
    return error;
  }
};

export const signUpUser = async ({ email, password }) => {
  try {
    await auth.createUserWithEmailAndPassword(email, password);
    return { ok: true };
  } catch (error) {
    return error;
  }
};

export const signInUser = async ({ email, password }) => {
  try {
    await auth.signInWithEmailAndPassword(email, password);
    return { ok: true };
  } catch (error) {
    // console.log(error.code);
    return { message: 'Invalid Credentials. Try Again.' };
  }
};

export const signOut = () => {
  return auth.signOut();
};

export const updateProfile = async (formData) => {
  const user = auth.currentUser;
  const { uid, email } = auth.currentUser;

  if (formData.photoURL !== null && typeof formData.photoURL === 'object') {
    await uploadImage(formData.photoURL);
    const url = await storage
      .ref('images')
      .child(formData.photoURL.name)
      .getDownloadURL();
    formData.photoURL = url;
  }

  if (email !== formData.email) {
    try {
      await user.updateEmail(formData.email);
    } catch (error) {
      // console.log(error.code);
      return error;
    }
  }

  if (formData.password) {
    try {
      await user.updatePassword(formData.password);
    } catch (error) {
      // console.log(error.code);
      return error;
    }
  }

  delete formData.password;
  try {
    await db.collection('users').doc(uid).update(formData);
    return { ok: true };
  } catch (error) {
    // console.log(error.code);
    return error;
  }
};

export const listenForUpdatedUser = (callback) => {
  const { uid } = auth.currentUser;

  db.collection('users')
    .doc(uid)
    .onSnapshot((doc) => {
      callback(doc.data());
    });
};

export const currentUser = async () => {
  try {
    const idToken = auth.currentUser
      ? await auth.currentUser.getIdToken()
      : undefined;
    return idToken;
  } catch (error) {
    return error;
  }
};

const createUserCollection = async (response) => {
  try {
    const fields = {
      displayName: response.displayName,
      email: response.email,
      phoneNumber: response.phoneNumber,
      photoURL: response.photoURL !== null ? response.photoURL : defaultAvatar,
      bio: null,
      // provider: response.providerData[0].providerId,
    };
    await db.collection('users').doc(response.uid).set(fields);
  } catch (error) {
    // console.log(error);
    return error;
  }
};

const uploadImage = async (image) => {
  const ref = await storage.ref(`images/${image.name}`);
  await ref.put(image);
};
