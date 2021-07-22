// Abenteuer config.

// Jeder Eintrag im Array ist 1 Woche mit x Rätseln.
// bsp: Woche 1 - 5 Rätsel
//      Woche 2 - 4 Rätsel ...
const sa2020 = { name: "sa2020", chapters: [4, 5, 2, 9] };

// Freigeschaltete Woche
export const unlocked = new Date().getDate() > 2 ? 4 : 3;
// Aktuelle Config
export const config = sa2020;

//------------------------------------------------------

export const generateDefaultState = () => {
  return {
    progress: {},
  };
};
