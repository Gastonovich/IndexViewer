const getIndexesIds = async (id) => {
  return fetch(
    `http://reactnativetechassignmentserver-env.eba-ebppqk3e.us-east-2.elasticbeanstalk.com/group/${id}`,
  );
};

const getDetailedInformation = async (id) => {
  return fetch(
    `http://reactnativetechassignmentserver-env.eba-ebppqk3e.us-east-2.elasticbeanstalk.com/index/${id}`,
  );
};

const getIds = async (ids) => {
  return Promise.all(ids.map((item) => getIndexesIds(item))).then(
    (responses) => {
      return Promise.all(responses.map((r) => r.json()));
    },
  );
};

const getDetails = async (indexes) => {
  return Promise.all(
    indexes.map(async (group) => {
      const newIndexes = await Promise.all(
        group.indexes.map((index) => getDetailedInformation(index)),
      ).then((responses) => {
        return Promise.all(responses.map((r) => r.json()));
      });
      group.indexes = newIndexes;
      return group;
    }),
  );
};

export async function getGroups() {
  const groupIds = await fetch(
    'http://reactnativetechassignmentserver-env.eba-ebppqk3e.us-east-2.elasticbeanstalk.com/group-ids',
  );
  const response = await groupIds.json();
  const indexes = await getIds(response.ids);
  return await getDetails(indexes);
}
