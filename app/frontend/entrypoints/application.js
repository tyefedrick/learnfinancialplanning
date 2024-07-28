// app/frontend/entrypoints/application.js
import "@hotwired/turbo-rails"
import { Application } from "@hotwired/stimulus"
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap'

const application = Application.start()

// Import and register all your controllers
const context = require.context("../controllers", true, /\.js$/)
context.keys().forEach((key) => {
  const controllerName = key.replace(/^.*\/(.*)\.js$/, '$1')
  application.register(controllerName, context(key).default)
})
