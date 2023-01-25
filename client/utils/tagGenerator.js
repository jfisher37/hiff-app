const tagGenerator = (tags) => {

    const tagsArr = [];

    tags.forEach((tag) => {
      switch (tag) {
        case "community":
          tagsArr.push(`
                      <li class="tag community-tag">Community</li>
                      `);
          break;
        case "education":
          tagsArr.push(`
                      <li class="tag education-tag">Education</li>
                      `);
          break;
        case "hunger":
          tagsArr.push(`
                      <li class="tag hunger-tag">Hunger</li>
                      `);
          break;
        case "social-justice":
          tagsArr.push(`
                      <li class="tag social-justice-tag">Social Justice</li>
                      `);
          break;
        case "center-city":
          tagsArr.push(`
                      <li class="tag center-city-tag">Center City</li>
                      `);
          break;
        case "north-philly":
          tagsArr.push(`
                      <li class="tag north-philly-tag">North Philly</li>
                      `);
          break;
        case "northeast-philly":
          tagsArr.push(`
                      <li class="tag northeast-philly-tag">Northeast Philly</li>
                      `);
          break;
        case "south-philly":
          tagsArr.push(`
                      <li class="tag south-philly-tag">South Philly</li>
                      `);
          break;

        case "west-philly":
          tagsArr.push(`
                      <li class="tag west-philly-tag">West Philly</li>
                      `);
          break;

        default:
          break;
      }
    });

    console.log(tagsArr);
    return tagsArr;
};

export default tagGenerator;
