import { User } from "./src/user/user.model.js";

const newUser = new User({
  name: 'Jane Doe',
  email: 'jane@example.com',
  age: 28
});

newUser.save()
  .then(user => {
    console.log('User saved:', user);
    process.exit(); // Exit app after saving
  })
  .catch(err => console.error('Error saving user:', err));