

  // export const saveLikeState = (state) => {
  //   try {
  //     const serializedStateLikes = JSON.stringify(state.loves.liked);
  //     localStorage.setItem('liked', serializedStateLikes);

  //   } catch {
  //     // ignore write errors
  //   }
  // };

  // export const loadLikeState = () => {
  //   try {
  //     const serializedStateLikes = localStorage.getItem('liked');
  //     if (serializedStateLikes === null) {
  //       return undefined;
  //     }
  //     return JSON.parse(serializedStateLikes);
  //   } catch (err) {
  //     return undefined;
  //   }
  // };


  export const saveUserState = (state) => {
    try {
      const serializedStateUser = JSON.stringify(state.user);
      localStorage.setItem('user', serializedStateUser);

    } catch {
      // ignore write errors
    }
  };

  export const loadUserState = () => {
    try {
      const serializedStateUser = localStorage.getItem('user');
      if (serializedStateUser === null) {
        return undefined;
      }
      return JSON.parse(serializedStateUser);
    } catch (err) {
      return undefined;
    }
  };

  export const saveState = (state) => {
    try {
      const serializedState = JSON.stringify(state);
      localStorage.setItem('state', serializedState);
    } catch {
      // ignore write errors
    }
  };

  export const loadState = () => {
    try {
      const serializedState = localStorage.getItem('state');
      if (serializedState === null) {
        return undefined;
      }
      return JSON.parse(serializedState);
    } catch (err) {
      return undefined;
    }
  };
