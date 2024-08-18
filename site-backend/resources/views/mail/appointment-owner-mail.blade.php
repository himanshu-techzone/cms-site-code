<table style='border:1px;text-align:left;'>
    <tr>
        <th>Name:</th>
        <td>{{ ucwords($details['name']) }}</td>
    </tr>
    <tr>
        <th>Phone:</th>
        <td>{{$details['clientphone']}}</td>
    </tr>
    <tr>
        <th>Email:</th>
        <td>{{$details['clientemail']}}</td>
    </tr>
    <?php if($details['treatment']){ ?>
    <tr>
        <th>Treatment:</th>
        <td>{{$details['treatment']}}</td>
    </tr>
    <?php } ?>
    <tr>
        <th>Date:</th>
        <td>{{date('d-m-Y', strtotime($details['date']))}}</td>
    </tr>
    <tr>
        <th>Message:</th>
        <td>{{$details['message']}}</td>
    </tr>
    @if($details['request_url'])
    <tr>
            <th>Service:</th>
            <td>{{ $details['request_url'] }}</td>
    </tr>
    @endif
    @if($details['referral_url'])
    <tr>
            <th>Source:</th>
            <td>{{ $details['referral_url'] }}</td>
    </tr>
    @endif
</table>