class Api::V1::LinksController < Api::ApiController
  respond_to :json

  def index
    user = current_user
    respond_with [user.links.order('id'), user.links.order('title')]
  end

  def create
    user = User.find(params[:user_id])
    link = user.links.create(link_params)
    respond_with link
  end

  def destroy
    user = User.find(params["link"]["user_id"])
    respond_with status: 204 if user.links.delete(params["id"])
  end

  def update
    link = Link.find(params[:link][:id])
    respond_with link.update(link_params)
  end

  private

    def link_params
      params.require(:link).permit(:id, :title, :url, :read, :user_id)
    end
end
