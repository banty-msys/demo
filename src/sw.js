importScripts('workbox-v4.3.1/workbox-sw.js')

workbox.setConfig({modulePathPrefix: 'workbox-v4.3.1/'})

const precacheManifest = []

workbox.precaching.suppressWarnings()
workbox.precaching.precacheAndRoute(precacheManifest)