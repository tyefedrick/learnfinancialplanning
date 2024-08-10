class ApplicationController < ActionController::Base

  # Redirect to home page after sign up
  def after_sign_up_path_for(resource)
    root_path
  end

  # Redirect to home page after sign in
  def after_sign_in_path_for(resource)
    root_path
  end

  # Redirect to home page after sign out
  def after_sign_out_path_for(resource_or_scope)
    root_path
  end
end
