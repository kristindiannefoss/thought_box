class Api::V1::LinksController < Api::ApiController
  respond_to :json
  # before_action :set_user

  def index
    # binding.pry
    @user = current_user
    respond_with @user.links
  end

  def show
    # @user = current_user
    @user = User.find(params[:id])
    respond_with @user.links.find(params[:link][:id])
  end

  def create
    @user = current_user
    link = @user.links.create(link_params)
    if link.save
      respond_with link
    end
  end

  def destroy
    @user = User.find(params[:id])
    respond_with status: 204 if @user.links.delete(params[:id])
  end

  def update
    # byebug;
    # @user = User.find(params[:id])
    @link = Link.find(params[:link][:id])
    respond_with @link.update(link_params)
    # @link = Link.find(params[:id])
    # respond_with @link if @link.update(link_params)
  end

  private

    def set_user
      # @user = User.find(params[:id])
        @user = current_user
    end


    def link_params
      params.require(:link).permit(:id, :title, :url, :read, :user_id)
    end
end

# {title: "Stuff", url: "www.deepthoughtsbyjackhandey.com/"}
