// Function to check segregation measures between classes of dangerous goods in CCU packing

function checkSeparation(firstDGClass, secondDGClass) {
  // Dangerous goods segregation array
  const dangerousGoodSegregationArray = [
    [0, 0, 0, 4, 2, 2, 4, 4, 4, 4, 4, 4, 2, 4, 2, 4, 0], // 1.1 ,1.2 , 1.5
    [0, 0, 0, 4, 2, 2, 4, 3, 3, 4, 4, 4, 2, 4, 2, 2, 0], // 1.3, 1.6
    [0, 0, 0, 2, 1, 1, 2, 2, 2, 2, 2, 2, 0, 4, 2, 2, 0], // 1.4
    [4, 4, 2, 0, 0, 0, 2, 1, 2, 0, 2, 2, 0, 4, 2, 1, 0], // 2.1
    [2, 2, 1, 0, 0, 0, 1, 0, 1, 0, 0, 1, 0, 2, 1, 0, 0], // 2.2
    [2, 2, 1, 0, 0, 0, 2, 0, 2, 0, 0, 2, 0, 2, 1, 0, 0], // 2.3
    [4, 4, 2, 2, 1, 2, 0, 0, 2, 1, 2, 2, 0, 3, 2, 0, 0], // 3
    [4, 3, 2, 1, 0, 0, 0, 0, 1, 0, 1, 2, 0, 3, 2, 1, 0], // 4.1
    [4, 3, 2, 2, 1, 2, 2, 1, 0, 1, 2, 2, 1, 3, 2, 1, 0], // 4.2
    [4, 4, 2, 0, 0, 0, 1, 0, 1, 0, 2, 2, 0, 2, 2, 1, 0], // 4.3
    [4, 4, 2, 2, 0, 0, 2, 1, 2, 2, 0, 2, 1, 3, 1, 2, 0], // 5.1
    [4, 4, 2, 2, 1, 2, 2, 2, 2, 2, 2, 0, 1, 3, 2, 2, 0], // 5.2
    [2, 2, 0, 0, 0, 0, 0, 0, 1, 0, 1, 1, 0, 1, 0, 0, 0], // 6.1
    [4, 4, 4, 4, 2, 2, 3, 3, 3, 2, 3, 3, 1, 0, 3, 3, 0], // 6.2
    [2, 2, 2, 2, 1, 1, 2, 2, 2, 2, 1, 2, 0, 3, 0, 2, 0], // 7
    [4, 2, 2, 1, 0, 0, 0, 1, 1, 1, 2, 2, 0, 3, 2, 0, 0], // 8
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] //  9
  ];

  // Get dangerousGoods segregation array value
  const segregationRule =
    dangerousGoodSegregationArray[firstDGClass][secondDGClass];

  translateRuleToText(segregationRule);
}

// Return rule as text
function translateRuleToText(x) {
  // Rules with output text
  const doh = "Doh! These can be packed in the same container";
  const firstRule = "Away from : 3m";
  const secondRule = "Separated from : 6m";
  const thirdRule = "Separated by a complete compartment or hold from : 12m";
  const fourthRule =
    "Separated longitudinally by an intervening complete compartment or hold from : 24m";
  const fifthRule = "Segregation, if any see 7.2.7.2";

  let reply = "Ingen klasser valgt";

  switch (x) {
    case 0:
      reply = doh;
      break;
    case 1:
      reply = firstRule;
      break;
    case 2:
      reply = secondRule;
      break;
    case 3:
      reply = thirdRule;
      break;
    case 4:
      reply = fourthRule;
      break;
    case 5:
      reply = fifthRule;
      break;
    default:
      break;
  }

  dmx.app.set("reply", reply);
}
