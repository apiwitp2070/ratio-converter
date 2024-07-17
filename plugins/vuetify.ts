// import this after install `@mdi/font` package
import "@mdi/font/css/materialdesignicons.css";

import "vuetify/styles";
import { createVuetify } from "vuetify";
import { VNumberInput } from "vuetify/labs/components";

export default defineNuxtPlugin((app) => {
  const vuetify = createVuetify({
    components: {
      VNumberInput,
    },
  });
  app.vueApp.use(vuetify);
});
