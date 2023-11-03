
import { createApp } from 'vue';

import App from './App.vue'

//importare bootstrap js
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";


/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faAnglesRight } from '@fortawesome/free-solid-svg-icons'
import { faAnglesLeft } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faLaptopCode } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'




/* add icons to the library */
library.add(faAnglesRight, faAnglesLeft, faEnvelope, faLaptopCode, faLinkedin, faGithub)

createApp(App).component('font-awesome-icon', FontAwesomeIcon).mount('#app');


