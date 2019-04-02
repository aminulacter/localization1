import Vue from "vue";
import VueI18n from "vue-i18n";

const bangla = {
    order: {
        ok: "ঠিক",
        cancel: "বাতিল"
    },
    message: { welcomeMsg: "আমাদের বিশ্ব স্বাগতম",
               welcome: "স্বাগতম" 
            }
};
const english = {
    order: {
        ok: "ok",
        cancel: "cancel"
    },
    message: {
        welcomeMsg: "Welcome to our World",
        welcome: "Welcome"
    }
};

Vue.use(VueI18n);
const messages = {
    'bd': bangla,
    'en': english
};

const i18n = new VueI18n({
    locale: "en", // set locale
    fallbackLocale: "en", // set fallback locale
    messages, // set locale messages
    
});

export default i18n;