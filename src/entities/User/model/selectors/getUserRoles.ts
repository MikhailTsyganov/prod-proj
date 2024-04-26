import { createSelector } from '@reduxjs/toolkit';
import { type IStateSchema } from '@/app/providers/store';
import { EUserRoles } from '../types/userSchema';

export const getUserRoles = (state: IStateSchema) => state.user.authData?.roles

export const isUserAdmin = createSelector(getUserRoles, (roles) => {
  return !!roles?.includes(EUserRoles.ADMIN)
})

export const isUserManager = createSelector(getUserRoles, (roles) => {
  return !!roles?.includes(EUserRoles.MANAGER)
})
