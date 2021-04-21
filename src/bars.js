const generateBar = function(height, maxHeight, options) {
  const { colour } = options;
  const barHeight = height * 100 / maxHeight;

  let bar = $("<div/>", {
    html: "",
    class: "bar"
  });

  bar.css({
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
  // TODO: Element needs to be a DOM or JQuery element and not a string.
  const { width, height, backColour, title } = options;
  // const chartBox = $("<div/>", {
  //   html: "",
  //   class: "bar"
  // });
  // const titleBlock = $("<h3/>", {
  //   html: title,
  //   class: "title"
  // });

  const chart = element;
  chart.css({
    width: `${width}rem`,
    height: `${height}rem`,
    backgroundColor: backColour
  });

  const barArray = generateBarArray(data, options);
  chart.append(barArray);
};

const testOptions = {
  width: 65,
  height: 50,
  colour: 'green',
  backColour: 'aliceblue',
  title: 'Test Title'
};

drawBarChart([1, 2, 3, 9, 5, 17, 2, 5, 5, 8], testOptions, $('#chart'));
