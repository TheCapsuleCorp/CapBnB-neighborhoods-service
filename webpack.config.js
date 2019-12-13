module.exports = {
  entry: __dirname + '/client/src/index.jsx',
  module: {
    rules: [
      {
        test: [/\.jsx$/],
        exclude: /node_modules/,
        resolve: {
          extensions: ['*', '.js', '.jsx'],
        },
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-react', '@babel/preset-env']
          }
        }
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader',
        ],
      },
      {
        test: /\.(eot|woff|woff2|svg|ttf)([\?]?.*)$/,
        use: [
          'file-loader',
        ],
      }
    ]
  },
  output: {
    library: 'Neighborhoods',
    filename: 'bundle.js',
    path: __dirname + '/client/dist',
    library: 'NeighborhoodsModule',
  }
};
