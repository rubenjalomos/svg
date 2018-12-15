const prodConfig = {
    apiKey: "AIzaSyD-usZ43I_pCPaSqLZ3l5DcWbWqZt8qroo",
    authDomain: "solarversereact.firebaseapp.com",
    databaseURL: "https://solarversereact.firebaseio.com",
    projectId: "solarversereact",
    storageBucket: "solarversereact.appspot.com",
    messagingSenderId: "290214707204"
};

const devConfig = {
    apiKey: "AIzaSyD-usZ43I_pCPaSqLZ3l5DcWbWqZt8qroo",
    authDomain: "solarversereact.firebaseapp.com",
    databaseURL: "https://solarversereact.firebaseio.com",
    projectId: "solarversereact",
    storageBucket: "solarversereact.appspot.com",
    messagingSenderId: "290214707204"
};

const config = process.env.NODE_ENV === 'production' ? prodConfig : devConfig;

export default config;
