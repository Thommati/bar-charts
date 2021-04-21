const generateBar = function(height, maxHeight, options) {
  const { colWidth, colour } = options;
  const barHeight = height * 100 / maxHeight;

  let bar = $("<div/>", {
    html: "",
    class: "bar"
  });

  bar.css({
    width: `${colWidth}rem`,
    height: `${barHeight}%`,
    backgroundColor: colour
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
  const chart = $(element);
  const barArray = generateBarArray(data, options);
  chart.append(barArray);
};

const testOptions = {
  colWidth: 2,
  colour: 'green'
};

drawBarChart([1, 2, 3, 9, 5], testOptions, '#chart');
