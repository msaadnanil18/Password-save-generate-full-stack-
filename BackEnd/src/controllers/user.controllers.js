import { asyncHandler } from "../utills/asyncHandler.js";
import { User } from "../schema/googleAuth.js";
const authenticateUser = async (email) => {
  try {
    console.log('Authenticating user with email:', email);

    const lowercasedEmail = email.toLowerCase();
    const user = await User.findOne({ email: lowercasedEmail });

    if (user) {
      console.log('User authenticated successfully:', user._id);
      return user._id;
    } else {
      console.log('User not found');
      return null;
    }
  } catch (error) {
    console.error('Error authenticating user:', error);
    throw error;
  }
};

const loginUserUpdate = asyncHandler(async (req, res) => {
  const {
    name,
    email,
    given_name,
    email_verified,
    picture,
  } = req.body;

   let user = await User.findOne({ email });
   if (!user) {
   
    user = await User.create({
      name,
      email,
      given_name,
      email_verified,
      picture,
    });
  }

  const userId = user._id;
  console.log(userId);

  return res
    .status(201)
    .json({ _id: userId, ...user._doc });
});
  
const logiUser = asyncHandler(async(req, res) => {
        console.log(req.params.userId)
         const userId = req.params.userId;
    
     try {
       // Use userId directly in the query
       const userData = await User.findById(userId);
       if (!userData) {
         return res.status(404).json({ message: 'User not found' });
       }
      return res.status(200).json(userData);
     } catch (error) {
       console.error(error);
       return res.status(500).json({ message: 'Internal Server Error' });
     }
})

const updatePassword = asyncHandler(async (req, res) => {
  const userId = req.params.userId;
  const { fieldPassword, password } = req.body;
 try {
    const user = await User.findByIdAndUpdate(
      userId, // Use userId as the filter criteria
      {
        $push: {
          passwordHistory: {
            fieldPassword: fieldPassword,
            password: password,
          },
        },
      },
      { new: true }
    );

    if (!user) {
      return res.status(404).json({ success: false, message: 'User not found' });
    }

    console.log("Updated user password history:", user);
    res.status(200).json({success: true, message: 'Password updated successfully', user });
  } catch (error) {
    console.error("Error updating password history:", error);
    res.status(500).json({ success: false, message: 'Internal Server Error' });
  }
});


export {logiUser,updatePassword, loginUserUpdate}
