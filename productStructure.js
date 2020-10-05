const products = [
  "preto-PP",
  "preto-M",
  "preto-G",
  "preto-GG",
  "preto-GG",
  "branco-PP",
  "branco-G",
  "vermelho-M",
  "azul-XG",
  "azul-XG",
  "azul-XG",
  "azul-P"
];

module.exports = () => {
  let dict_products = {};
  let dict_color = {};
  let color_ref = "";
  let size_ref = "";
  let size_count;
  products.map(item => {
    let [color, size] = item.split("-");
    // runs everytime a color repeats
    if (color == color_ref) {
      // counts the repeated sizes
      if (size == size_ref) {
        size_count = size_count + 1;
      } else {
        size_ref = size;
        size_count = 1;
      }
    }
    // runs everytime a new color comes in
    else {
      color_ref = color;
      size_ref = size;
      dict_color = {};
      size_count = 1;
    }
    // atualize the info
    dict_color[size_ref] = size_count;
    dict_products[color_ref] = dict_color;
  });
  return dict_products;
};
