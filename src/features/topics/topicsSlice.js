import { createSlice } from '@reduxjs/toolkit';

export const topicsSlice = createSlice({
  name: 'topics',
  initialState: {
    topics: {},
  },
  reducers: {
    addTopic: (state, action) => {
      const { id, name, icon } = action.payload;
      state.topics[id] = {
        id: id,
        name: name,
        icon,
        quizIds: [],
      };
    },
  },
  extraReducers: {
    'quizzes/addQuiz': (state, action) => {
      const { topicId, id } = action.payload;
      if (state.topics[topicId]) {
        state.topics[topicId].quizIds.push(id);
      } else {
        console.error(`Topic with id ${topicId} not found`);
      }
    },
  },
});

export const { addTopic, addQuizIdForTopic } = topicsSlice.actions;
export const selectTopics = (state) => state.topics.topics;
export default topicsSlice.reducer;
