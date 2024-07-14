import DataModel from "../models/data";

const fetchData = (code: string) => {
  return new Promise(async (resolve, reject) => {
    const data = await DataModel.find({ code })
      .sort({ timestamp: -1 })
      .limit(20);
    if (data) resolve(data);
    else reject();
  });
};

export { fetchData };
