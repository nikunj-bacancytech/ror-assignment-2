class UserMailer < ApplicationMailer

    default from: 'nikunj.padhiyar@mailinator.com'
 
    def welcome_email
        @user = params[:user]
        @url  = 'http://example.com/login'
        mail(to: @user.email, subject: 'Welcome to My Email Test')
    end

end
