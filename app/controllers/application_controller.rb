class ApplicationController < ActionController::Base

    before_action :configure_permitted_parameters, if: :devise_controller?
    helper_method :current_user, :logged_in?

    def logged_in?
        !!current_user
    end

    def require_user
        if !logged_in?
            flash[:error] = "You must be logged in to perform that action"
            redirect_to new_user_session_path
        end
    end

    protected

    def configure_permitted_parameters
        devise_parameter_sanitizer.permit(:sign_up, keys: [:name, :phone])
    end
end
