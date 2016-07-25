class LinksController < ApplicationController

  before_action :set_user

  def new
    @link = Link.new
  end

  def create
    @link = @user.links.create(link_params)
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
