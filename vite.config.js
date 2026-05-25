import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        pune_market: resolve(__dirname, 'malpani-m-soulstrings-pune-real-estate-market.html'),
          infrastructure: resolve(__dirname, 'malpani-m-soulstrings-baner-pashan-link-road-infrastructure.html'),
        main: resolve(__dirname, 'index.html'),
        baner: resolve(__dirname, 'malpani-m-soulstrings-baner-pashan-link-road-real-estate.html'),
        bhk: resolve(__dirname, 'malpani-m-soulstrings-baner-pashan-link-road-4bhk-luxury.html'),
        nri: resolve(__dirname, 'malpani-m-soulstrings-baner-pashan-link-road-nri-investment.html'),
        smart: resolve(__dirname, 'malpani-m-soulstrings-baner-pashan-link-road-smart-home-automation.html'),
        vs: resolve(__dirname, 'malpani-m-soulstrings-baner-pashan-link-road-vs-aundh-real-estate.html'),

        aundh: resolve(__dirname, 'malpani-m-soulstrings-baner-pashan-link-road-aundh-luxury-upgrade.html'),
        shiva: resolve(__dirname, 'malpani-m-soulstrings-baner-pashan-link-road-shivajinagar-elite-retreat.html'),
        pashan: resolve(__dirname, 'malpani-m-soulstrings-baner-pashan-link-road-pashan-nature-tech.html'),
        baner_pin: resolve(__dirname, 'malpani-m-soulstrings-baner-pashan-link-road-pan-card-club-pinnacle.html'),
      },
        },
  },
})
