-- REDBOYPF By RedBoy
-- USE E TO X-RAY!
local REDPF = Instance.new("ScreenGui")
local Main = Instance.new("Frame")
local FlyBtn = Instance.new("TextButton")
local XR_2 = Instance.new("TextButton")
local ESPBtn = Instance.new("TextButton")
local ChamsBtn = Instance.new("TextButton")
local RMBtn = Instance.new("TextButton")
local Name = Instance.new("TextLabel")
local Open = Instance.new("TextButton")
local Close = Instance.new("TextButton")
--Properties:
REDPF.Name = "REDPF"
REDPF.Parent = game.CoreGui

Main.Name = "Main"
Main.Parent = REDPF
Main.BackgroundColor3 = Color3.new(1, 0, 0)
Main.BackgroundTransparency = 0.80000001192093
Main.Position = UDim2.new(0, 0, 0.400000006, 0)
Main.Size = UDim2.new(0, 123, 0, 250)

FlyBtn.Name = "FlyBtn"
FlyBtn.Parent = Main
FlyBtn.BackgroundColor3 = Color3.new(1, 1, 1)
FlyBtn.Size = UDim2.new(0, 120, 0, 50)
FlyBtn.Style = Enum.ButtonStyle.RobloxRoundDefaultButton
FlyBtn.Font = Enum.Font.Cartoon
FlyBtn.Text = "FLY"
FlyBtn.TextColor3 = Color3.new(0, 0, 0)
FlyBtn.TextScaled = true
FlyBtn.TextSize = 14
FlyBtn.TextWrapped = true
FlyBtn.MouseButton1Click:connect (function()

	local Player = game:GetService("Players").LocalPlayer;
local UserInputService = game:GetService("UserInputService");
local Bricks = {};
local Space;
local WalkInAir = false;

UserInputService.InputBegan:Connect(function(
InputObject,
GameProcessedEvent
)
if (
(not GameProcessedEvent) and
(InputObject.UserInputType == Enum.UserInputType.Keyboard)
) then
if (InputObject.KeyCode == Enum.KeyCode.P) then
for Key, Value in next, Bricks do
Value:Destroy();
end;
elseif (InputObject.KeyCode == Enum.KeyCode.Space) then
Space = true;
elseif (InputObject.KeyCode == Enum.KeyCode.L) then
WalkInAir = (not WalkInAir);
end;
end;
end);
UserInputService.InputEnded:Connect(function(
InputObject,
GameProcessedEvent
)
if (
(not GameProcessedEvent) and
(InputObject.UserInputType == Enum.UserInputType.Keyboard)
) then
if (InputObject.KeyCode == Enum.KeyCode.Space) then
Space = nil;
end;
end;
end);

local LastPosition = Vector3.new(0, 0, 0);

game:GetService("RunService").RenderStepped:Connect(function()
local PositionChanged;
local Torso = (
Player.Character or
Player.CharacterAdded:wait()
):WaitForChild("Torso");
if ((Torso.Position - LastPosition).Magnitude > 0.75) then
PositionChanged = true;
end;
if (Space or (WalkInAir and PositionChanged)) then
local FlyBrick = Instance.new("Part",
(
Torso:GetChildren()[1] or
Torso
)
);
FlyBrick.Transparency = 1;
FlyBrick.Anchored = true;
FlyBrick.CFrame = (
Torso.CFrame *
CFrame.new(0, -2.25, 0)
);
FlyBrick.Size = Vector3.new(5, 0.05, 5);
FlyBrick.BrickColor = BrickColor.new("Institutional white");
FlyBrick.Locked = true;
FlyBrick.TopSurface = Enum.SurfaceType.SmoothNoOutlines;
FlyBrick.BottomSurface = FlyBrick.TopSurface;
FlyBrick.RightSurface = FlyBrick.TopSurface;
FlyBrick.LeftSurface = FlyBrick.TopSurface;
FlyBrick.FrontSurface = FlyBrick.TopSurface;
FlyBrick.BackSurface = FlyBrick.TopSurface;
Bricks[#Bricks + 1] = FlyBrick;
end;
LastPosition = Torso.Position;
end)
end)
XR_2.Name = "XR_2"
XR_2.Parent = Main
XR_2.BackgroundColor3 = Color3.new(1, 1, 1)
XR_2.Position = UDim2.new(0, 0, 0.200000003, 0)
XR_2.Size = UDim2.new(0, 120, 0, 50)
XR_2.Style = Enum.ButtonStyle.RobloxRoundDefaultButton
XR_2.Font = Enum.Font.Cartoon
XR_2.Text = "X-RAY"
XR_2.TextColor3 = Color3.new(0, 0, 0)
XR_2.TextScaled = true
XR_2.TextSize = 14
XR_2.TextWrapped = true
ESPBtn.Name = "ESPBtn"
ESPBtn.Parent = Main
ESPBtn.BackgroundColor3 = Color3.new(1, 1, 1)
ESPBtn.Position = UDim2.new(0, 0, 0.400000006, 0)
ESPBtn.Size = UDim2.new(0, 120, 0, 50)
ESPBtn.Style = Enum.ButtonStyle.RobloxRoundDefaultButton
ESPBtn.Font = Enum.Font.Cartoon
ESPBtn.Text = "ESP"
ESPBtn.TextColor3 = Color3.new(0, 0, 0)
ESPBtn.TextScaled = true
ESPBtn.TextSize = 14
ESPBtn.TextWrapped = true
ESPBtn.MouseButton1Click:connect (function()

	function Esp(player, username)
    if player ~= game:service("Players").LocalPlayer then
    if player.Character  then
    local torso = player.Character:FindFirstChild("Torso")
    if torso then
    local base = Instance.new("BillboardGui")
    local esP = Instance.new("Frame", base)
    base.AlwaysOnTop = true
    base.Enabled = true
    base.Size = UDim2.new(4.5,0,6,0)
    base.StudsOffset = Vector3.new(0, -0.6, 0)
    esP.BackgroundColor3 = Color3.new(170,0,0) -- Edit Color Here--
    esP.BackgroundTransparency = 0.4
    esP.BorderSizePixel = 0.5
    esP.Size = UDim2.new(1,0,1,0)
    if base and workspace.CurrentCamera then
    base.Name = username
    base.Parent = workspace.CurrentCamera
    base.Adornee = torso
    end
    end
    end
    end
end
function CheckEsp()
    for x,player in pairs(game:service("Players"):GetPlayers()) do
    if player then
        if player.TeamColor ~= game:service("Players").LocalPlayer.TeamColor then
        local char = player.Character
        if char then
            local torso = char:FindFirstChild("Torso")
            if torso then
                local currentcam = workspace.CurrentCamera
                local playerName = player.Name
                if currentcam:FindFirstChild(playerName) == nil then
                    Esp(player, playerName)
                end
            end
        end
        end
    end
    end
end

while wait(1) do
    CheckEsp()
end
end)
ChamsBtn.Name = "ChamsBtn"
ChamsBtn.Parent = Main
ChamsBtn.BackgroundColor3 = Color3.new(1, 1, 1)
ChamsBtn.Position = UDim2.new(0, 0, 0.600000024, 0)
ChamsBtn.Size = UDim2.new(0, 120, 0, 50)
ChamsBtn.Style = Enum.ButtonStyle.RobloxRoundDefaultButton
ChamsBtn.Font = Enum.Font.Cartoon
ChamsBtn.Text = "CHAMS"
ChamsBtn.TextColor3 = Color3.new(0, 0, 0)
ChamsBtn.TextScaled = true
ChamsBtn.TextSize = 14
ChamsBtn.TextWrapped = true
ChamsBtn.MouseButton1Click:connect (function()
	-- Phantom forces Esp Chams, made by ThisW0ntGetbanned#7965, :/
for _,p in pairs(game:GetChildren()) do
   if p.ClassName == ("Players") then
   plrs = p
   end
end
while true do
wait(0.1)
for _, v in pairs(plrs:GetChildren()) do
if v.TeamColor ~= plrs.LocalPlayer.TeamColor and not v.Character.Head:FindFirstChild("BillboardGui") then --   ~=
i = Instance.new("BillboardGui",v.Character.Head)
i.Active = true
i.AlwaysOnTop = true
i.Size = UDim2.new(1,0,1,0)
h = Instance.new("Frame",i)
h.Size = UDim2.new(2,0,1,0)
h.AnchorPoint = Vector2.new(0.25, 0)
h.BackgroundColor3 = Color3.new(1,0,0)
h.BorderSizePixel = 0
h.BackgroundTransparency = 0.4
i2 = Instance.new("BillboardGui",v.Character.Torso)
i2.Active = true
i2.AlwaysOnTop = true
i2.Size = UDim2.new(2,0,2,0)
t = Instance.new("Frame",i2)
t.Size = UDim2.new(1,0,1,0)
t.AnchorPoint = Vector2.new(0, 0)
t.BackgroundColor3 = Color3.new(0,1,0)
t.BorderSizePixel = 0
t.BackgroundTransparency = 0.4
i3 = Instance.new("BillboardGui",v.Character["Left Arm"])
i3.Active = true
i3.AlwaysOnTop = true
i3.Size = UDim2.new(1,0,2,0)
la = Instance.new("Frame",i3)
la.Size = UDim2.new(1,0,1,0)
la.AnchorPoint = Vector2.new(0, 0)
la.BackgroundColor3 = Color3.new(0,0,1)
la.BorderSizePixel = 0
la.BackgroundTransparency = 0.4
i4 = Instance.new("BillboardGui",v.Character["Right Arm"])
i4.Active = true
i4.AlwaysOnTop = true
i4.Size = UDim2.new(1,0,2,0)
ra = Instance.new("Frame",i4)
ra.Size = UDim2.new(1,0,1,0)
ra.AnchorPoint = Vector2.new(0, 0)
ra.BackgroundColor3 = Color3.new(0,0,1)
ra.BorderSizePixel = 0
ra.BackgroundTransparency = 0.4
i5 = Instance.new("BillboardGui",v.Character["Left Leg"])
i5.Active = true
i5.AlwaysOnTop = true
i5.Size = UDim2.new(1,0,2,0)
ll = Instance.new("Frame",i5)
ll.Size = UDim2.new(1,0,1,0)
ll.AnchorPoint = Vector2.new(0, 0)
ll.BackgroundColor3 = Color3.new(0,0,1)
ll.BorderSizePixel = 0
ll.BackgroundTransparency = 0.4

i6 = Instance.new("BillboardGui",v.Character["Right Leg"])
i6.Active = true
i6.AlwaysOnTop = true
i6.Size = UDim2.new(1,0,2,0)
rl = Instance.new("Frame",i6)
rl.Size = UDim2.new(1,0,1,0)
rl.AnchorPoint = Vector2.new(0, 0)
rl.BackgroundColor3 = Color3.new(0,0,1)
rl.BorderSizePixel = 0
rl.BackgroundTransparency = 0.4
end
end
end
end)
RMBtn.Name = "RMBtn"
RMBtn.Parent = Main
RMBtn.BackgroundColor3 = Color3.new(1, 1, 1)
RMBtn.Position = UDim2.new(0, 0, 0.800000012, 0)
RMBtn.Size = UDim2.new(0, 120, 0, 50)
RMBtn.Style = Enum.ButtonStyle.RobloxRoundDefaultButton
RMBtn.Font = Enum.Font.Cartoon
RMBtn.Text = "NOCLIP"
RMBtn.TextColor3 = Color3.new(0, 0, 0)
RMBtn.TextScaled = true
RMBtn.TextSize = 14
RMBtn.TextWrapped = true
RMBtn.MouseButton1Click:connect (function()

        Stepped = game:GetService("RunService").Stepped:Connect(function()
            if not Clipon == false then
                for a, b in pairs(Workspace:GetChildren()) do
                if b.Name == Plr.Name then
                for i, v in pairs(Workspace[Plr.Name]:GetChildren()) do
                if v:IsA("BasePart") then
                v.CanCollide = false
                end end end end
            else
                Stepped:Disconnect()
            end
        end)
end)
local Xray
	local Move = game.Workspace.Map
local ReplicatedStorage = game:GetService("ReplicatedStorage")
local Players = game:GetService("Players")
local mouse = Players.LocalPlayer:GetMouse()
local a = false
mouse.KeyDown:Connect(function(key)
if key == "e" then
if a == false then
Move.Parent = ReplicatedStorage
Players.LocalPlayer.Character.HumanoidRootPart.Anchored = true
a = true
elseif a == true then
Move.Parent = game.Workspace
Players.LocalPlayer.Character.HumanoidRootPart.Anchored = false
a = false
end
end
end)
Name.Name = "Name"
Name.Parent = Main
Name.BackgroundColor3 = Color3.new(1, 1, 1)
Name.BackgroundTransparency = 1
Name.Position = UDim2.new(0, 0, -0.136000007, 0)
Name.Size = UDim2.new(0, 123, 0, 34)
Name.Font = Enum.Font.Cartoon
Name.Text = "REDBOYPF"
Name.TextColor3 = Color3.new(0.792157, 0, 0)
Name.TextScaled = true
Name.TextSize = 14
Name.TextWrapped = true

Open.Name = "Open"
Open.Parent = REDPF
Open.BackgroundColor3 = Color3.new(1, 0, 0)
Open.Position = UDim2.new(0, 0, 0.899999976, 0)
Open.Size = UDim2.new(0, 80, 0, 40)
Open.Visible = false
Open.Font = Enum.Font.Cartoon
Open.Text = "Open"
Open.TextColor3 = Color3.new(0, 0, 0)
Open.TextScaled = true
Open.TextSize = 14
Open.TextWrapped = true
Open.MouseButton1Down:connect(function()
    Close.Visible = true
    Main.Visible = true
    Open.Visible = false
end)
Close.Name = "Close"
Close.Parent = REDPF
Close.BackgroundColor3 = Color3.new(1, 0, 0)
Close.Position = UDim2.new(0, 0, 0.899999976, 0)
Close.Size = UDim2.new(0, 80, 0, 40)
Close.Font = Enum.Font.Cartoon
Close.Text = "Close"
Close.TextColor3 = Color3.new(0, 0, 0)
Close.TextScaled = true
Close.TextSize = 14
Close.TextWrapped = true
Close.MouseButton1Down:connect(function()
    Open.Visible = true
    Main.Visible = false
    Close.Visible = false
end)
-- Scripts:
