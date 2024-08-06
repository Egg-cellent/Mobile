const IS_DEV = process.env.APP_ENVIRONMENT === 'development';
const IS_PREVIEW = process.env.APP_ENVIRONMENT === 'preview';

const getUniqueIdentifier = () => {
  if (IS_DEV) {
    return 'com.capstone.vitacare.dev';
  }

  if (IS_PREVIEW) {
    return 'com.capstone.vitacare.preview';
  }

  return 'com.capstone.vitacare';
};

const getAppName = () => {
  if (IS_DEV) {
    return 'VitaCare (Dev)';
  }

  if (IS_PREVIEW) {
    return 'VitaCare (Preview)';
  }

  return 'VitaCare: E-Hospital';
};

module.exports = () => ({
  expo: {
    name: getAppName(),
    slug: "Vitacare",
    version: "1.0.0",
    orientation: "portrait",
    icon: "./assets/images/icon.png",
    scheme: "myapp",
    userInterfaceStyle: "automatic",
    splash: {
      image: "./assets/images/splash.png",
      resizeMode: "contain",
      backgroundColor: "#ffffff",
    },
    assetBundlePatterns: [
      "**/*"
    ],
    ios: {
      supportsTablet: true,
      bundleIdentifier: getUniqueIdentifier(),
    },
    android: {
      adaptiveIcon: {
        foregroundImage: "./assets/images/adaptive-icon.png",
        backgroundColor: "#ffffff",
      },
      package: getUniqueIdentifier(),
    },
    web: {
      bundler: "metro", 
      output: "static",
      favicon: "./assets/images/favicon.png"
    },
    plugins: [
      "expo-router"
    ],
    experiments: {
      typedRoutes: true
    },
    extra: {
      router: {
        origin: false
      },
      eas: {
        projectId: "229965c5-e196-470a-946c-bed2996573f6"
      }
    },
    updates: {
      url: "https://u.expo.dev/229965c5-e196-470a-946c-bed2996573f6"
    },
    runtimeVersion: {
      policy: "appVersion"
    },
    owner: "vitacare-org",
  },
});
