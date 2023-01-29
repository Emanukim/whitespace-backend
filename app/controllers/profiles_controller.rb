class ProfilesController < ApplicationController

def index
    profiles = Profile.all
    render json: profiles
end


def show
    profile = Profile.find_by(id: params[:id])
    if
    render json: profile, except: [:created_at, :updated_at], methods: [:owner]
    else
        render json: {error: "Profile not found"}, status: :not_found
    end
end

end
