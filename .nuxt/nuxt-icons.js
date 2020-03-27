export default async function (ctx, inject) {
  const icons = {"64x64":"/_nuxt/icons/icon_64.2eeb4d.png","120x120":"/_nuxt/icons/icon_120.2eeb4d.png","144x144":"/_nuxt/icons/icon_144.2eeb4d.png","152x152":"/_nuxt/icons/icon_152.2eeb4d.png","192x192":"/_nuxt/icons/icon_192.2eeb4d.png","384x384":"/_nuxt/icons/icon_384.2eeb4d.png","512x512":"/_nuxt/icons/icon_512.2eeb4d.png"}
  const getIcon = size => icons[size + 'x' + size] || ''
  inject('icon', getIcon)
}
