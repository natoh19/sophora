

  export const saveState = (state) => {
    try {
      const serializedState = JSON.stringify(state);
      localStorage.setItem('likes', serializedState);
    } catch {
      // ignore write errors
    }
  };

  export const loadState = () => {
    try {
      const serializedState = localStorage.getItem('likes');
      if (serializedState === null) {
        return [];
      }
      return JSON.parse(serializedState);
    } catch (err) {
      return [];
    }
  };
