-- Farewell Infortality.
-- Version: 2.82
-- Instances:
local KiloGUI = Instance.new("ScreenGui")
local MainFrame = Instance.new("Frame")
local Btn1 = Instance.new("TextButton")
local Name = Instance.new("TextBox")
local OtherFrame = Instance.new("Frame")
local open = Instance.new("TextButton")

--Properties:

KiloGUI.Name = "KiloGUI"
KiloGUI.Parent = game.CoreGui

MainFrame.Name = "MainFrame"
MainFrame.Parent = KiloGUI
MainFrame.BackgroundColor3 = Color3.new(0, 0.666667, 1)
MainFrame.BackgroundTransparency = 0.60000002384186
MainFrame.BorderSizePixel = 0
MainFrame.Position = UDim2.new(0.00746889319, 0, 0.337236524, 0)
MainFrame.Size = UDim2.new(0, 200, 0, 208)
MainFrame.Visible = false

Btn1.Name = "Btn1"
Btn1.Parent = MainFrame
Btn1.BackgroundColor3 = Color3.new(0.188235, 0.188235, 0.188235)
Btn1.BackgroundTransparency = 0.30000001192093
Btn1.BorderSizePixel = 0
Btn1.Position = UDim2.new(0.0649999976, 0, 0.275677979, 0)
Btn1.Size = UDim2.new(0, 173, 0, 39)
Btn1.Font = Enum.Font.SourceSans
Btn1.Text = "Message"
Btn1.TextColor3 = Color3.new(1, 1, 1)
Btn1.TextSize = 20

Btn1.MouseButton1Down:connect(function()
m = Instance.new("Message", game.Workspace)
m.Text = "Hello World"
wait(5)
m:Remove()
end)


Name.Name = "Name"
Name.Parent = MainFrame
Name.BackgroundColor3 = Color3.new(1, 1, 1)
Name.BackgroundTransparency = 1
Name.Position = UDim2.new(0.0419999696, 0, 0.0419999994, 0)
Name.Size = UDim2.new(0, 184, 0, 45)
Name.ClearTextOnFocus = false
Name.Font = Enum.Font.SourceSans
Name.Text = "Kilo's GUI"
Name.TextColor3 = Color3.new(0, 0, 0)
Name.TextSize = 20

OtherFrame.Name = "OtherFrame"
OtherFrame.Parent = KiloGUI
OtherFrame.BackgroundColor3 = Color3.new(1, 1, 1)
OtherFrame.BackgroundTransparency = 1
OtherFrame.Position = UDim2.new(0, 0, 0.765807986, 0)
OtherFrame.Size = UDim2.new(0, 124, 0, 51)
OtherFrame.Visible = true

open.Name = "open"
open.Parent = OtherFrame
open.BackgroundColor3 = Color3.new(0, 0.666667, 1)
open.BackgroundTransparency = 0.30000001192093
open.BorderSizePixel = 2
open.Position = UDim2.new(-0.00111113652, 0, 0.15392229, 0)
open.Size = UDim2.new(0, 114, 0, 35)
open.Font = Enum.Font.SciFi
open.Text = "Open"
open.TextColor3 = Color3.new(0, 0, 0)
open.TextSize = 20

open.MouseButton1Down:connect(function()
OtherFrame.Visible = false
MainFrame.Visible = true
end)


-- Scripts:
