/**
 * Babel: Converter (transpilar = converter um código em outro) código React para um código que o browser entenda
 * Webpack: Faz a conversão de outros arquivos como .js, .css, .png para uma maneira que o browser possa entender
 * 
 * Loaders do Webpack: Através do babel-loaders, css-loaders, image-loaders, file-loaders e tudo que termina em loaders podemos entender
 * que é utilizado pelo Webpack pois este faz a transpilação para que tudo faça sentido para o browser.
 * 
 * Atualizar bundle.js
 * yarn babel src/index.js --out-file public/bundle.js
 * 
 * yarn webpack --mode development
 * 
 * Esta biblioteca monitora as alterações nos arquivos *.js e atualiza o bundler
 * yarn add webpack-dev-server -D
 * Executando
 * yarn webpack serve --mode development
 */