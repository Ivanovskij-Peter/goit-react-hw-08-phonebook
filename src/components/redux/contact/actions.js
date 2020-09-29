import { createAction } from '@reduxjs/toolkit';

export const fetchContactsRequest = createAction(
  'contacts/fetchContactsRequest',
);
export const fetchContactSuccess = createAction('contacts/fetchContactSuccess');

export const fetchContactError = createAction('contacts/fetchContactError');

export const addContactRequest = createAction('contacts/addContactsRequest');

export const addContactSuccess = createAction('contacts/addContactsSuccess');
export const addContactError = createAction('contacts/addContactsError');

export const deleteContactRequest = createAction(
  'contacts/deleteContactsRequest',
);

export const deleteContactSuccess = createAction(
  'contacts/deleteContactsSuccess',
);
export const deleteContactError = createAction('contacts/deleteContactsError');

export const deleteContact = createAction('phonebook/delete');

export const changeFilter = createAction('phonebook/filter');
