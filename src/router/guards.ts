import { NavigationGuard } from 'vue-router';

export const SecretGuard: NavigationGuard = async (to, from, next) => {
  if (to.query.password === 'secret') {
    next();
  } else {
    next(false);
  }
};
