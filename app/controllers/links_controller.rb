class LinksController < ApplicationController

  before_action :set_user

  # TODO: get this flash message working and tested

  def create
    @link = @user.links.create(link_params)
    if @link.save
    else
      flash[:message] = "Invalid url, please try a valid web address"
    end
    redirect_to links_path
  end

  def index
    @link = @user.links.new
    @links = @user.links
  end

  private

    def set_user
      @user = current_user
    end

    def link_params
      params.require(:link).permit(:id, :title, :url, :read)
    end

end
