export const staticCard = function () {
  return (
    <>
      <div>
        <img src={process.env.PUBLIC_URL + "/catImage.png"} />
      </div>
      <div>
        <p>10 minutes ago</p>
        <p>
          Lorem ipsum dolor sit amet consectetur. Metus amet habitant nunc
          consequat. Tldkd
        </p>
        <p>2023. 3. 15</p>
      </div>
    </>
  );
};
const noImageCard = function () {
  return (
    <>
      <div>
        <img src={process.env.PUBLIC_URL + "/catImage.png"} />
      </div>
      <div>
        <p>10 minutes ago</p>
        <p>
          Lorem ipsum dolor sit amet consectetur. Metus amet habitant nunc
          consequat. Tldkd
        </p>
        <p>2023. 3. 15</p>
      </div>
    </>
  );
};
const hoverCard = function () {
  return (
    <>
      <div>
        <img src={process.env.PUBLIC_URL + "/catImage.png"} />
      </div>
      <div>
        <p>10 minutes ago</p>
        <p>
          Lorem ipsum dolor sit amet consectetur. Metus amet habitant nunc
          consequat. Tldkd
        </p>
        <p>2023. 3. 15</p>
      </div>
    </>
  );
};
