// app/frontend/entrypoints/application.js
import "@hotwired/turbo-rails"
import { Application } from "@hotwired/stimulus"
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap'
// Import Rails UJS for handling links and forms with special methods like DELETE
import Rails from "@rails/ujs";
Rails.start();

const application = Application.start()

// Import and register all your controllers
const context = require.context("../controllers", true, /\.js$/)
context.keys().forEach((key) => {
  const controllerName = key.replace(/^.*\/(.*)\.js$/, '$1')
  application.register(controllerName, context(key).default)
})
