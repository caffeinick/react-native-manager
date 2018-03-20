export const employeeUpdate = ({ prop, value }) => {
  return {
    type: 'employee_update',

    // prop === 'name' || 'phone' || 'shift'
    payload: { prop, value }
  };
};
