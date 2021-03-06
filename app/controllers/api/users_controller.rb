class Api::UsersController < ApplicationController
  include FriendableController

  def create
    @user = User.new(user_params)
    if @user.save
      login(@user)
      render 'api/users/show'
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  def show
    @user = User.find(params[:id])
    if @user
      render :show
    else
      render json: { errors: ['User not found']}, status: 404
    end
  end

  def index
    @users = User.all
  end

  private
  def user_params
    params.require(:user).permit(:email, :password, :first_name, :last_name, :birthday, :gender, :address, :phone_number, :work, :college, :profile_pic_id, :banner_pic_id)
  end
end
