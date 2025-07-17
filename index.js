// Destructuring Assignment

// Given the following data:

//solution
const response = {
  status: 200,
  data: {
    users: [
      {
        id: 1,
        profile: {
          fullName: 'Wanjiku Kariuki',
          contact: {
            email: 'wanjiku@example.com',
            phone: '0712345678'
          }
        },
        roles: ['admin', 'editor']
      },
      {
        id: 2,
        profile: {
          fullName: 'John Doe',
          contact: {
            email: 'john@example.com'
            // no phone provided
          }
        },
        roles: ['viewer']
      }
    ],
    meta: {
      count: 2,
      source: 'internal'
    }
  }
};

//accessing the elements in the response object
console.log(response.data.users[0].profile.contact.email);
console.log(response.data.users[1].roles);
console.log(response.data.meta.source);

// Destructuring and renaming
const {
  status: responseStatus,
  data: {
    users: [firstUser, secondUser],
    meta: { count = 0 }
  }
} = response;

// From first user
const {
  profile: {
    fullName: firstUserName,
    contact: { phone: firstUserPhone = 'No phone' }
  },
  roles: [firstUserRole]
} = firstUser;

// From second user
const {
  profile: {
    contact: {
      email: secondUserEmail,
      phone: secondUserPhone = 'Not provided'
    }
  }
} = secondUser;

// Function using destructuring in parameters
function displayUserSummary({
  profile: {
    fullName: name,
    contact: { email = '', phone = '' }
  },
  roles
}) {
  const contact = phone || email || 'No contact info';
  console.log(`User ${name} has roles: ${roles.join(', ')} and can be contacted at ${contact}`);
}

// Logs
/*console.log('responseStatus:', responseStatus);
console.log('count:', count);
console.log('firstUserName:', firstUserName);
console.log('firstUserRole:', firstUserRole);
console.log('firstUserPhone:', firstUserPhone);
console.log('secondUserEmail:', secondUserEmail);
console.log('secondUserPhone:', secondUserPhone);


displayUserSummary(firstUser);
displayUserSummary(secondUser);*/

