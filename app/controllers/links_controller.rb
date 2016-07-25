class LinksController < ApplicationController

  def new
    @link = Link.new
  end

  def create
    @link = Link.create(link_params)
  end
  
  def index
    @user = current_user
    @links = @user.links
  end

  private

    def link_params
      params.require(:link).permit(:id, :title, :url, :read)
    end

end
