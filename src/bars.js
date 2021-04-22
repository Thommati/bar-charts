const generateBar = function(height, maxHeight, options) {
  const { colour, spacing } = options;
  const barHeight = height * 100 / maxHeight;

  let bar = $("<div/>", {
    html: "",
    class: "bar"
  });

  bar.css({
    height: `${barHeight}%`,
    backgroundColor: colour,
    margin: `0 ${spacing}rem`
  });

  return bar;
};

const generateBarArray = function (data, options) {
  const maxVal = data.reduce((max, current) => current > max ? current : max);
  const result = [];

  for (let d of data) {
    result.push(generateBar(d, maxVal, options));
  }

  return result;
};

const drawBarChart = function(data, options, element) {
  const { width, height, backColour, title } = options;
  const chart = $("<div/>", {
    html: "",
    class: "chart"
  });
  const titleBlock = $("<h3/>", {
    html: title,
    class: "title"
  });
  chart.css({
    width: `${width}rem`,
    height: `${height}rem`
  });
  const barArray = generateBarArray(data, options);

  element.addClass('chartBox');
  element.css({
    backgroundColor: backColour
  });
  element.append([titleBlock, chart.append(barArray)]);
};

const testOptions = {
  width: 55,
  height: 35,
  colour: 'green',
  backColour: 'lightgrey',
  title: 'My Bar Chart Test Title',
  spacing: 0.3
};

drawBarChart([1, 2, 3, 9, 5, 17, 2, 5, 5, 8], testOptions, $('#chart-display'));
