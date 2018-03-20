export const employeeUpdate = ({ prop, value }) => {
  return {
    type: 'employee_update',

    // prop === 'name' || 'phone' || 'shift'
    payload: { prop, value }
  };
};

export const employeeCreate = ({ name, phone, shift }) => {
  console.log(name, phone, shift);
};
