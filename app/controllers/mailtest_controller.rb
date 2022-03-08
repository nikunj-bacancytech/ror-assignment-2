class MailtestController < ApplicationController
    def index
        user = User.first        
        UserMailer.with(user: user).welcome_email.deliver
    end
end
