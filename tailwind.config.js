/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    extend: {
      fontFamily:{
        ggsans:["ggsans","sans-sarif"],
        ginto:["Ginto","sans-sarif"],
        gintoNord:["Ginto-Nord","sans-sarif"],
        whitney:["Whitney","sans-sarif"]
      },
      colors:{
        Lightblack: "#23272A",
        offWhite:"#F6F6F6",
        lightBlue:"#5865F2",
        lightBlue500:"#404EED",
      }
    },
  },
  plugins: [],
}
