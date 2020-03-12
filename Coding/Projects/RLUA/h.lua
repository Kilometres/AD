local m = game.Players.LocalPlayer:GetMouse()
local hummy = game:GetService("Players").LocalPlayer.Character.Humanoid

m.KeyDown:connect(function(k)
    k = k:lower()
    if k == "v" then
        if hummy.PlatformStand == false then
            hummy.PlatformStand = true
        elseif hummy.PlatformStand == true then
            hummy.PlatformStand = false
        end
    end
    if k == "b" then
        if hummy.Sit == false then
            hummy.Sit = true
        elseif hummy.Sit == true then
            hummy.Sit = false
        end
    end
    if k == "n" then
        hummy.Health = 0
    end
end)
