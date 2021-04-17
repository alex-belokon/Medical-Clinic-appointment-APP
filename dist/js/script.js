"use strict";

import { loginBtn, createVisitBtn, root } from "./utilities/constants.js";
import { createAutorizationWindow } from "./utilities/autorization.js";


if (localStorage.getItem("token") == null) {
  loginBtn.style.display = "block";
  createAutorizationWindow();
} else {
  createVisitBtn.style.display = 'block';

}

