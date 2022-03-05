# ROR ASSIGNMENT 2 (Nikunj)

* Details

This assignment will cover user authentication, file storage, action mailer and chat platform.

    User Authentication using “devise” gem.

        Authenticate application for User with devise gem.
        User will have a profile image, name, email, phone number and password.
        Profile Image will be uploaded using Rails Active Storage.
        A confirmation email will be sent at the time of signup. User will click on a link to confirm the account.
        Forgot Password Mail will be sent with a link to reset the password.
        Validates all field to be present.
        Validate phone number of 10 characters.
        Profile Image should not be more than 2 mb.

        User Model - profile_image, name, email, phone_number, password

Chat platform between logged in users.
	
    2 users can chat each other when they are logged in.
